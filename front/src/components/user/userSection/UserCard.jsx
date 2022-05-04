import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Layout, CardBody, CardImg } from "./UserCard.style";

function UserCard({ user, setIsEditing, isEditable, isNetwork }) {
  const navigate = useNavigate();
  return (
    <Layout>
      <CardBody>
        <CardImg src={user?.imageLink} alt="유저 프로필 사진" />
        <Card.Title>{user?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user?.email}</Card.Subtitle>
        <Card.Text>{user?.description}</Card.Text>

        {isEditable && (
          <Button
            variant="outline-info"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            편집
          </Button>
        )}

        {isNetwork && (
          <Card.Link
            className="mt-3"
            href="#"
            onClick={() => navigate(`/like/${user.id}`)}
          >
            북마크 페이지
          </Card.Link>
        )}
      </CardBody>
    </Layout>
  );
}

export default UserCard;
