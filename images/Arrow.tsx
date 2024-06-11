interface ArrowProps {
  className : string;
}

export default function Arrow({className} : ArrowProps){
  return(
    <svg className={className} width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71 124C99.9553 159.555 180.319 220.364 270.131 179.152C359.943 137.939 374.604 258.545 370.712 324M370.712 324L350.901 299.152M370.712 324L389 299.152" stroke="#939393" stroke-width="7" stroke-linecap="round"/>
    </svg>
  )
}