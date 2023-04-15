import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDescription = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14 3.712c0 1.839.014 2.018.209 2.588a4.078 4.078 0 0 0 2.083 2.322c.159.074.45.184.648.245l.36.11 1.56.014c.858.007 1.691.008 1.85.001l.291-.012-3.501-3.5-3.5-3.5v1.732m-6.3 6.604a.745.745 0 0 0 .029 1.382c.128.053.445.062 2.28.061 1.986-.001 2.142-.006 2.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.304-.074-2.3-.074-1.996 0-2.151.005-2.3.074m0 5a.745.745 0 0 0 .029 1.382c.131.055.64.062 4.28.061 3.931-.001 4.139-.004 4.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.152-.071-.359-.074-4.3-.074s-4.148.003-4.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDescription);
export default ForwardRef;
