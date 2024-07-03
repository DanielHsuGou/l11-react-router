import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router";

export default function Blog() {
  const { id } = useParams();
  // fetch sth with id

  const { pathname } = useLocation();
  console.log(pathname);
  // show path "/blog/1", use for some actions

  const navigate = useNavigate();
  useEffect(() => {
    if (!id) navigate("/blog/1");
  });
  // auto navigate to specified page with some conditions

  return <div className="contents">Blog{id}</div>;
}
