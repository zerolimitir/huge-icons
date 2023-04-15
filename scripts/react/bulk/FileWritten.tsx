import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileWritten = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.7 6.316a.745.745 0 0 0 .029 1.382c.131.055.64.062 4.28.061 3.931-.001 4.139-.004 4.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.152-.071-.359-.074-4.3-.074s-4.148.003-4.3.074m0 5a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074m8.54 2.746c-1.648.352-2.85 1.562-3.178 3.2-.055.273-.062.634-.053 2.528L13.02 22l4-4 4-4-2.26.003c-1.768.003-2.317.015-2.52.059'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileWritten);
export default ForwardRef;
