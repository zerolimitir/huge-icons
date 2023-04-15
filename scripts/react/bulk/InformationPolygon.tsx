import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInformationPolygon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 6.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-.88 3.221c-.392.181-.558.607-.384.984.134.291.407.46.743.46h.181l.001 3.19c.001 3.016.005 3.199.075 3.35a.745.745 0 0 0 1.382-.029c.054-.13.062-.592.062-3.771 0-3.922.008-3.776-.212-4.015-.188-.205-.354-.243-1.048-.243-.538 0-.666.012-.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInformationPolygon);
export default ForwardRef;
