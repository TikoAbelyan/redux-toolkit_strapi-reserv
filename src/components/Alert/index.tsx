import { Alert } from "antd";

type AlertMessagesProps = {
  type: "success" | "info" | "warning" | "error";
  showIcon?: false | boolean;
  message: string;
};

export const AlertMessage = ({
  type,
  showIcon,
  message,
}: AlertMessagesProps) => {
  return <Alert message={message} type={type} showIcon={showIcon} />;
};
