import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUploadCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.8 1.288c-.169.036-.314.172-2.326 2.185C7.411 5.537 7.326 5.627 7.289 5.81c-.119.581.322 1.021.901.901.18-.038.262-.112 1.62-1.464l1.43-1.424v6.15c0 5.46.007 6.166.062 6.298a.748.748 0 0 0 1.396 0c.055-.132.062-.838.062-6.3V3.82l1.39 1.389c1.435 1.433 1.531 1.512 1.839 1.51.173-.001.439-.112.539-.225a.778.778 0 0 0 .113-.831c-.052-.108-.785-.868-2.17-2.249-1.759-1.755-2.113-2.09-2.231-2.113l-.2-.039a.899.899 0 0 0-.24.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUploadCircle);
export default ForwardRef;
