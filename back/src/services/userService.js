import { User } from "../db";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import sendMail from "../utils/send-mail";
import { AuthEmail } from "../db";
import { getRequiredInfoFromData } from "../utils/user";

class userAuthService {
  static async addUser({
    id,
    name,
    email,
    password,
    height,
    weight,
    gender,
    type,
    imageLink,
  }) {
    //일반회원가입일때
    if (type === "TodayExercise") {
      const emailExits = await User.isEmailExists({ email, type });
      //일반회원중에서 이메일이 존재하는지 체크
      //   console.log(emailExits);
      if (emailExits) {
        const errorMessage =
          "이 이메일은 현재 가입이력이 있는 이메일입니다. 다른 이메일을 이용해주세요.";
        return { errorMessage };
      }
      //이메일이 인증완료된 이메일인지 체크
      const authEmailExists = await AuthEmail.isAuthenticated({ email });
      //   console.log(authEmailResult);
      if (!authEmailExists) {
        const errorMessage =
          "인증이 완료되지 않은 이메일입니다.인증번호 발급후 인증을 완료해주세요.";
        return { errorMessage };
      }
      if (gender === "male") {
        imageLink = process.env.initial_male;
      } else {
        imageLink = process.env.initial_female;
      }
    }
    // 비밀번호 해쉬화
    const hashedPassword = await bcrypt.hash(password, 10);

    // id 는 유니크 값 부여
    if (!id) {
      id = uuidv4();
    }
    const newUser = {
      id,
      name,
      email,
      password: hashedPassword,
      height,
      weight,
      gender,
      type,
      imageLink,
    };
    //소셜로그인시 회원가입이 자동으로될때 없는 성분이 있기때문에 없는 성분들을 삭제
    Object.keys(newUser).forEach((key) => {
      if (newUser[key] === undefined) {
        delete newUser[key];
      }
    });

    // db에 저장
    const createdNewUser = await User.create({ newUser });
    const resultUser = getRequiredInfoFromData(createdNewUser);

    return resultUser;
  }

  static async getUser({ email, password, type }) {
    // 이메일 db에 존재 여부 확인
    const user = await User.findByEmail({ email, type });
    if (!user) {
      const errorMessage =
        "해당 계정은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    if (user.deleted === true) {
      const errorMessage = "해당 계정은 이미 탈퇴하였습니다.";
      return { errorMessage };
    }

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );
    if (!isPasswordCorrect) {
      const errorMessage =
        "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || "jwt-secret-key";
    const token = jwt.sign({ user_id: user.id }, secretKey);
    // console.log(user);
    // 반환할 loginuser 객체를 위한 변수 설정
    const loginUser = getRequiredInfoFromData(user);
    loginUser.token = token;

    return loginUser;
  }

  static async getUsers() {
    const users = await User.findAll();
    return users;
  }

  static async setUser({ user_id, toUpdate }) {
    // 우선 해당 id 의 유저가 db에 존재하는지 여부 확인
    let user = await User.findById({ user_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage = "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    if (user.deleted === true) {
      const errorMessage = "해당 계정은 이미 탈퇴하였습니다.";
      return { errorMessage };
    }
    Object.keys(toUpdate).forEach((key) => {
      if (toUpdate[key] === undefined || toUpdate[key] === null) {
        delete toUpdate[key];
      }
    });
    // const setter = {};
    // // 업데이트 대상에 name이 있다면, 즉 name 값이 null 이 아니라면 업데이트 진행

    // if (toUpdate.name) {
    //   setter.name = toUpdate.name;
    // }
    // if (toUpdate.weight) {
    //   setter.weight = toUpdate.weight;
    // }
    // if (toUpdate.height) {
    //   setter.height = toUpdate.height;
    // }
    // if (toUpdate.gender) {
    //   setter.gender = toUpdate.gender;
    // }
    // if (toUpdate.password) {
    //   setter.password = toUpdate.password;
    // }
    // if (toUpdate.imageLink) {
    //   setter.imageLink = toUpdate.imageLink;
    // }
    // if (toUpdate.description) {
    //   setter.description = toUpdate.description;
    // }
    const updatedUser = await User.updateAll({ user_id, setter: toUpdate });
    const resultUser = getRequiredInfoFromData(updatedUser);
    return resultUser;
  }

  static async getUserInfo({ user_id }) {
    const user = await User.findById({ user_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage =
        "해당 유저는 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    if (user.deleted === true) {
      const errorMessage = "해당 계정은 이미 탈퇴하였습니다.";
      return { errorMessage };
    }
    const resultUser = getRequiredInfoFromData(user);
    return resultUser;
  }

  static async checkPassword({ user_id, password }) {
    const user = await User.findById({ user_id });
    if (!user) {
      const errorMessage =
        "해당 유저는 가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    if (user.deleted === true) {
      const errorMessage = "해당 계정은 이미 탈퇴하였습니다.";
      return { errorMessage };
    }
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      const errorMessage = "비밀번호를 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    return true;
  }

  static async nodeMailer({ email, name, password }) {
    const message = sendMail(
      email,
      "오늘도 운동 임시 비밀번호입니다.",
      `안녕하세요 ${name}님, 임시 비밀번호는: ${password} 입니다. 로그인 후 비밀번호를 꼭 변경해주세요!`
    );

    return message;
  }
  //   static async findUserByEmail({ email }) {
  //     const user = await User.findByEmail({ email });
  //     return user;
  //   }

  static async deleteUser({ user_id }) {
    const user = await User.findById({ user_id });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user || user === null) {
      const errorMessage = "해당 유저가 존재하지 않습니다.";
      return { errorMessage };
    }
    if (user.deleted === true) {
      const errorMessage = "해당 계정은 이미 탈퇴하였습니다.";
      return { errorMessage };
    }
    const setter = { deleted: true };
    const deletedUser = await User.updateAll({ user_id, setter });

    return deletedUser;
  }
}

export { userAuthService };
