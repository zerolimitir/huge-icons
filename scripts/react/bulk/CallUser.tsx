import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCallUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.62 3.039a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294.157.431.46.805.852 1.053.187.118.554.254.712.263.057.004-.148.02-.456.036-.803.042-1.178.192-1.63.651-.524.532-.732 1.408-.476 1.997.107.245.414.572.647.69.314.16.567.18 2.239.18s1.925-.02 2.239-.18c.233-.118.54-.445.647-.69.256-.589.048-1.465-.476-1.997-.452-.459-.827-.609-1.63-.651-.308-.016-.513-.032-.456-.036.158-.009.525-.145.712-.263a2.11 2.11 0 0 0 .852-1.053c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallUser);
export default ForwardRef;
