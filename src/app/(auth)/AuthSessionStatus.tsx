import { StatusProps } from "@/hooks/auth";

const AuthSessionStatus = ({
  status,
  className,
  ...props
}: {
  status: StatusProps;
  className: string;
}) => (
  <>
    {status && (
      <div
        className={`${className} font-medium text-sm text-green-600`}
        {...props}
      >
        {status}
      </div>
    )}
  </>
);

export default AuthSessionStatus;
