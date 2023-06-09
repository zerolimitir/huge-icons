import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookOpenCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.364 3.063c-.649.175-1.171.748-1.319 1.449-.032.151-.045 1.891-.044 6.06 0 6.422-.012 6.091.243 6.596.146.29.493.67.776.852.323.207.638.3 1.36.403 1.721.246 3.034.558 4.3 1.024.682.25 1.864.83 2.36 1.157.374.247.694.392.87.395L12 21V5.656l-.233-.048c-.17-.035-.349-.123-.67-.329C9.41 4.194 7.208 3.46 4.51 3.083c-.684-.096-.851-.099-1.146-.02m2.357 4.558c1.23.215 3.221.78 3.664 1.04.408.239.474.844.128 1.167a.89.89 0 0 1-.509.212c-.065 0-.342-.079-.616-.176-.932-.331-1.869-.573-3.123-.805-.523-.097-.612-.125-.732-.231a.688.688 0 0 1-.264-.574.72.72 0 0 1 .712-.734c.089 0 .422.046.74.101m-.008 3.999c.314.055.805.156 1.092.224.423.101.548.147.66.246.19.166.266.331.266.57a.69.69 0 0 1-.237.547c-.235.222-.421.239-1.047.095a30.58 30.58 0 0 0-1.083-.219c-.75-.138-.902-.21-1.039-.493-.242-.5.093-1.064.636-1.068.1-.001.438.043.752.098m14.982 4.697c-.167.075-.237.153-2.525 2.776-.637.73-.78.851-.901.758a563.69 563.69 0 0 1-.97-.778c-.507-.406-.982-.76-1.056-.786a.686.686 0 0 0-.545.028.757.757 0 0 0-.339 1.073c.112.185 1.906 1.604 2.265 1.792.302.158.312.16.731.159.479-.001.75-.081 1.056-.313.172-.13 3.089-3.426 3.227-3.646a.745.745 0 0 0-.336-1.065.689.689 0 0 0-.607.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenCheck);
export default ForwardRef;
