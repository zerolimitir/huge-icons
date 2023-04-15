import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDivideCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.68 6.536a1.502 1.502 0 0 0-1.014 2.155c.126.25.393.517.643.643a1.515 1.515 0 0 0 1.752-.273c.855-.855.395-2.317-.8-2.537-.279-.052-.297-.052-.581.012m-3.98 4.78a.745.745 0 0 0 .029 1.382c.131.055.64.062 4.28.061 3.931-.001 4.139-.004 4.291-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.152-.071-.359-.074-4.3-.074s-4.148.003-4.3.074m3.98 3.22a1.502 1.502 0 0 0-1.014 2.155c.126.25.393.517.643.643a1.515 1.515 0 0 0 1.752-.273c.855-.855.395-2.317-.8-2.537-.279-.052-.297-.052-.581.012'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDivideCircle);
export default ForwardRef;
