function Footer(props: any) {
  return <footer>
    <div className="bg-dark-1 flex flex-row place-items-center justify-between">
      <div className="ml-150px flex flex-col text-small text-placeholder">
        <p className="font-bold">AppImagePool</p>
        <p>A simple AppImageHub client</p>
      </div>
      <div className="mr-150px">
        <a href="https://github.com/prateekmedia/appimagepool">
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <defs>
              <filter id="filter_1">
              <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.52156866 0 0 0 0 0.52156866 0 0 0 0 0.52156866 0 0 0 1 0" />
              </filter>
              <path d="M0 0L24 0L24 24L0 24L0 0Z" id="path_1" />
            </defs>
            <g id="github" filter="url(#filter_1)">
              <path d="M0 0L24 0L24 24L0 24L0 0Z" id="Background" fill="none" fill-rule="evenodd" stroke="none" />
              <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.71 21.7364 23.9991 17.1557 24 12C24 5.37 18.63 0 12 0L12 0Z" id="Shape" fill="#000000" stroke="none" />
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div className="h-16 bg-dark-1"></div>
    <div className="bg-dark-2 flex flex-col justify-center place-items-center text-small text-placeholder">
      <div className="h-16"></div>
      {/* <p>Site design by iwoithe</p> */}
      {/* TODO: Decide on the final website license */}
      <p>Website released under the CC BY-SA 4.0 license</p>
      <div className="h-16"></div>
    </div>
  </footer>;
}

export default Footer
