export default function Gallery({ datas }) {
  return (
    <div>
      {datas.map(data => (
          <img width={420} src={data.image_url} />
        ))}
    </div>
  );
}
