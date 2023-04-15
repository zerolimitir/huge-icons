import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDropRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.646 5.763a2.808 2.808 0 0 0-1.758.971c-.213.254-.504.845-.575 1.166-.078.351-.078 7.849 0 8.2.071.321.362.912.575 1.166.36.431.917.779 1.472.919.536.136 1.242.068 1.76-.169.121-.055 1.633-.923 3.359-1.928 3.119-1.817 3.141-1.83 3.48-2.168.559-.557.801-1.136.801-1.92 0-.843-.35-1.594-.983-2.112-.215-.175-6.22-3.698-6.637-3.893a2.828 2.828 0 0 0-1.494-.232m.749 1.535c.288.102 6.363 3.669 6.526 3.833.25.25.337.474.337.869s-.087.619-.337.869c-.163.164-6.238 3.731-6.526 3.833-.556.196-1.231-.083-1.522-.627L7.78 15.9V8.1l.093-.175c.133-.249.416-.507.658-.601.251-.096.632-.107.864-.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropRight);
export default ForwardRef;
