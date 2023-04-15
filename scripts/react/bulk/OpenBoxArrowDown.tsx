import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBoxArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.807 1.289c-.249.053-.465.281-.523.549-.028.133-.044.833-.044 1.97v1.765l-.431-.421c-.468-.456-.613-.535-.914-.501a.752.752 0 0 0-.541 1.151c.063.098.446.503.851.901.596.585.787.748.998.852a1.744 1.744 0 0 0 1.594 0c.211-.104.4-.266.996-.852.404-.398.781-.801.837-.896a.742.742 0 0 0-.634-1.127c-.26 0-.428.101-.842.508l-.394.387-.001-1.778c-.001-1.075-.017-1.848-.042-1.956-.097-.421-.47-.647-.91-.552M3.002 7.498l-.999 1.497 1.688.858C5.97 11.011 9.953 13 9.99 12.999c.016-.001.471-.666 1.01-1.479.539-.813.989-1.478 1-1.478.011 0 .461.665 1 1.478.539.813.994 1.478 1.01 1.479.037.001 4.02-1.988 6.299-3.146l1.688-.858-.999-1.497L20 6l-4 2-4 2-4-2-4-2-.998 1.498'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxArrowDown);
export default ForwardRef;
