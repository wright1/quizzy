export interface CategoryCardProps {
  name: string;
  icon: JSX.Element;
}

const CategoryCard = (props: CategoryCardProps) => {
  const { icon, name } = props;
  return (
    <div role="listitem">
      <div>{icon}</div>
      <div>{name}</div>
    </div>
  );
};

export default CategoryCard;
