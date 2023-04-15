import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.52 2.025a4.519 4.519 0 0 0-1.682.622c-.181.116-3.694 2.984-5.253 4.289-.865.724-1.349 1.53-1.526 2.539-.088.499-.088 8.671 0 9.17a4.017 4.017 0 0 0 3.168 3.272c.398.081.507.083 5.773.083s5.375-.002 5.773-.083a4.017 4.017 0 0 0 3.168-3.272c.088-.499.088-8.671 0-9.17-.177-1.009-.661-1.815-1.526-2.539-1.559-1.305-5.072-4.173-5.253-4.289a4.586 4.586 0 0 0-1.202-.525c-.335-.084-1.124-.138-1.44-.097m3.868 11.342a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.064.092-.18.204-.257.249-.137.081-.186.082-3.359.082s-3.222-.001-3.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.539-.028 3.268-.024l3.143.006.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeMinus);
export default ForwardRef;
