interface AvatarProps {
  size: number;
  name: string;
}

const Avatar = ({size, name}: AvatarProps) => {
  const parts = name.trim().split(" ");
  const initials = parts[0][0].toUpperCase() + parts[parts.length - 1][0].toUpperCase();

  return (
    <div className="avatar"
         style={{
           width: `${size}px`,
           height: `${size}px`,
           fontSize: `${size / 2.5}px`
         }}>
      {initials}
    </div>
  );
}

export default Avatar;