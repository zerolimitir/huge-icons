import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8 6.365c0 2.863.012 3.927.047 4.043.062.208.311.485.533.592.206.1.526.117.764.04.12-.039.379-.271 1.116-.998.581-.573 1.023-.977 1.12-1.023.216-.103.624-.103.84 0 .097.046.539.45 1.12 1.023.737.727.996.959 1.116.998.238.077.558.06.764-.04.222-.107.471-.384.533-.592.035-.116.047-1.18.047-4.043V2.48H8v3.885'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBox);
export default ForwardRef;
