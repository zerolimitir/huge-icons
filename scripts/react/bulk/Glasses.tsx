import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGlasses = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6 13.282a4.442 4.442 0 0 0-2.012.801c-.808.576-1.357 1.391-1.636 2.436-.109.404-.116 1.353-.015 1.817.371 1.703 1.633 2.964 3.327 3.326.423.09 1.249.09 1.672 0 1.494-.319 2.689-1.366 3.169-2.776.498-1.463.249-2.857-.731-4.081-.866-1.083-2.378-1.693-3.774-1.523m11 .003c-1.835.21-3.38 1.675-3.701 3.51-.117.664-.051 1.363.197 2.091.478 1.409 1.674 2.457 3.168 2.776.423.09 1.249.09 1.672 0 1.694-.362 2.96-1.627 3.327-3.326.102-.474.093-1.416-.017-1.829-.479-1.785-1.899-3.023-3.699-3.224a3.069 3.069 0 0 0-.947.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlasses);
export default ForwardRef;
