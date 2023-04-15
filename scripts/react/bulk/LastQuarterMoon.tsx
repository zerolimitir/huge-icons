import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLastQuarterMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.6 5.096c.419.128.49.161.81.368 1.239.801 2.185 2.728 2.496 5.083.093.704.093 2.202 0 2.906-.311 2.355-1.257 4.282-2.496 5.083-.32.207-.391.24-.81.368-.337.103-.292.115.201.054 1.569-.194 2.91-.825 4.034-1.898 1.777-1.696 2.516-4.12 2.004-6.574-.271-1.3-.998-2.585-2.004-3.546-1.124-1.073-2.465-1.704-4.034-1.898-.493-.061-.538-.049-.201.054'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLastQuarterMoon);
export default ForwardRef;
