import react from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

export default function Footer({ children, ...restprop }) {
  return <Container {...restprop}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restprop }) {
  return <Row {...restprop}>{children}</Row>;
};

Footer.Column = function FooterColumn({
  children,
  ...restprop
}) {
  return <Column {...restprop}>{children}</Column>;
};

Footer.Link = function FooterLink({
  children,
  ...restprop
}) {
  return <Link {...restprop}>{children}</Link>;
};

Footer.Title = function FooterTitle({
  children,
  ...restprop
}) {
  return <Title {...restprop}>{children}</Title>;
};

Footer.Text = function FooterText({
  children,
  ...restprop
}) {
  return <Text {...restprop}>{children}</Text>;
};

Footer.Break = function FooterBreak({
  children,
  ...restprop
}) {
  return <Break {...restprop}>{children}</Break>;
};
