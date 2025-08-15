function RejectedFallback({ error }: { error: Error }) {
  return (
    <div>
      <p>에러 발생: {error.message}</p>
    </div>
  );
}

//TODO 스타일 변경
