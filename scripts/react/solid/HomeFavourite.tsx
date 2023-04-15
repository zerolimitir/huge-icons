import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 2.025a4.519 4.519 0 0 0-1.682.622c-.181.116-3.694 2.984-5.253 4.289-.865.724-1.349 1.53-1.526 2.539-.088.499-.088 8.671 0 9.17a4.017 4.017 0 0 0 3.168 3.272c.398.081.507.083 5.773.083s5.375-.002 5.773-.083a4.017 4.017 0 0 0 3.168-3.272c.088-.499.088-8.671 0-9.17-.177-1.009-.661-1.815-1.526-2.539-1.559-1.305-5.072-4.173-5.253-4.289a4.586 4.586 0 0 0-1.202-.525c-.335-.084-1.124-.138-1.44-.097m3.02 9.143a2.194 2.194 0 0 1 1.487 2.249 2.376 2.376 0 0 1-.293.94c-.116.202-2.497 2.623-2.754 2.801a1.773 1.773 0 0 1-1.96 0c-.088-.061-.719-.675-1.402-1.365-1.341-1.352-1.432-1.469-1.556-1.997a2.175 2.175 0 0 1 2.118-2.694c.614 0 1.094.204 1.623.689l.224.205.216-.223c.636-.654 1.48-.876 2.297-.605'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeFavourite);
export default ForwardRef;
