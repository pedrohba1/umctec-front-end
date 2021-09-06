import Container from './styles';

const Paginator = ({ setPage, page }) => {
  return (
    <Container>
      <button
        disabled={page === 1}
        type="button"
        onClick={() => setPage(page - 1)}
      >
        anterior
      </button>
      <span>{page}</span>
      <button type="button" onClick={() => setPage(page + 1)}>
        próximo
      </button>
    </Container>
  );
};

export default Paginator;
