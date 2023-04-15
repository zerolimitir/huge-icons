import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLockDash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.498 1.284a4.746 4.746 0 0 0-3.761 2.654c-.4.817-.497 1.418-.497 3.091 0 .993.004 1.058.07 1.031.039-.016.381-.039.76-.05l.69-.021V6.785c.001-1.333.034-1.588.276-2.122a3.445 3.445 0 0 1 1.621-1.625 3.372 3.372 0 0 1 2.686 0 3.445 3.445 0 0 1 1.621 1.625c.242.534.275.789.276 2.122v1.204l.69.021c.379.011.722.034.76.05.066.027.07-.038.07-1.031 0-1.673-.097-2.274-.497-3.091-.741-1.514-2.137-2.483-3.826-2.656-.447-.046-.476-.046-.939.002m.202 12.032a.734.734 0 0 0-.398.413c-.091.219-.091 2.323 0 2.542a.748.748 0 0 0 1.396 0c.051-.122.062-.348.061-1.28-.001-1.014-.008-1.148-.075-1.291-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLockDash);
export default ForwardRef;
