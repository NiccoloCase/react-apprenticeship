interface MyHeader2Props {
  color: string;
}

export const MyHeader2: React.FC<MyHeader2Props> = (props) => {
  return (
    <div style={{ color: props.color }}>
      <h1>header</h1>
    </div>
  );
};

export const MyFooter = () => {
  return (
    <div>
      <h1>footer</h1>
    </div>
  );
};
