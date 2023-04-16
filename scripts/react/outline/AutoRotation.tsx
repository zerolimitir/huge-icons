import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAutoRotation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.798 2.798a.651.651 0 0 0-.38.262c-.141.184-.183.389-.132.639.041.199.086.246 3.736 3.901 4.106 4.112 3.871 3.845 3.872 4.405.001.522-.001.525-1.773 2.295l-1.561 1.56v-.612c0-.529-.011-.632-.079-.766-.258-.505-.955-.53-1.286-.047l-.095.139.001 1.223c.002 1.367.009 1.414.281 1.823.183.276.516.548.818.669.206.082.296.089 1.411.103 1.16.014 1.195.012 1.373-.074.541-.262.55-1.046.014-1.319-.134-.068-.237-.079-.766-.079h-.611l1.606-1.61c1.725-1.73 1.855-1.885 2.041-2.447.095-.286.107-.384.107-.863 0-.481-.012-.576-.109-.869a2.925 2.925 0 0 0-.305-.62c-.145-.214-1.166-1.259-3.889-3.978-3.192-3.187-3.714-3.692-3.852-3.73-.182-.048-.276-.05-.422-.005M6.007 5.684c-.539.272-.533 1.074.01 1.32.135.062.266.074.762.075l.6.001-1.606 1.61c-1.725 1.73-1.855 1.885-2.041 2.447-.095.286-.107.384-.107.863 0 .481.012.576.109.869.063.19.191.45.305.62.145.214 1.167 1.26 3.889 3.978 3.363 3.358 3.708 3.691 3.868 3.733a.728.728 0 0 0 .786-.259c.141-.185.183-.39.132-.64-.041-.199-.086-.246-3.736-3.901-4.106-4.112-3.871-3.845-3.872-4.405-.001-.522.001-.525 1.773-2.295L8.44 8.14v.612c0 .529.011.632.079.766.258.506.955.531 1.284.045L9.9 9.42 9.899 8.2c-.002-1.364-.009-1.411-.281-1.82a1.95 1.95 0 0 0-.818-.669c-.207-.083-.293-.089-1.42-.101-1.168-.013-1.205-.011-1.373.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAutoRotation);
export default ForwardRef;