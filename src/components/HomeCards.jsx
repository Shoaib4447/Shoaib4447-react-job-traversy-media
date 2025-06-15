import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <Card>
        <h1>Card 1</h1>
        <p>This is card 1 paragraph</p>
      </Card>

      <Card bg='bg-blue-300'>
        <h1>Card 2</h1>
        <p>This is card 2 paragraph</p>
      </Card>
    </>
  );
};

export default HomeCards;
