import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBarChartMiddleLong = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 3.047c-.721.138-1.381.801-1.536 1.545-.062.3-.062 14.516 0 14.816C10.232 20.31 11.08 21 12 21c.92 0 1.768-.69 1.956-1.592.062-.3.062-14.516 0-14.816-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004m-8 5c-.721.138-1.381.801-1.536 1.545-.062.298-.062 9.518 0 9.816C2.232 20.31 3.08 21 4 21c.92 0 1.768-.69 1.956-1.592.062-.298.062-9.518 0-9.816-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004m16 0c-.721.138-1.381.801-1.536 1.545-.062.298-.062 9.518 0 9.816C18.232 20.31 19.08 21 20 21c.92 0 1.768-.69 1.956-1.592.062-.298.062-9.518 0-9.816-.159-.762-.818-1.411-1.573-1.549a2.106 2.106 0 0 0-.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarChartMiddleLong);
export default ForwardRef;
