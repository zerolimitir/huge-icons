import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAboutPhone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 6.316a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291a.743.743 0 0 0 1.368 0c.069-.149.074-.304.074-2.3 0-1.996-.005-2.151-.074-2.3-.181-.392-.607-.558-.984-.384m-.12 6.779a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-.88 5.221a.745.745 0 0 0 .029 1.382c.122.051.348.062 1.271.062 1.201 0 1.299-.014 1.515-.212.401-.369.272-1.03-.244-1.246-.122-.051-.348-.062-1.28-.061-1.014.001-1.148.008-1.291.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAboutPhone);
export default ForwardRef;
