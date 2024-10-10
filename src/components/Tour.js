const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container"></div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
