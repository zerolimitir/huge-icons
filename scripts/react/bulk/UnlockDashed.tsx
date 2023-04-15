import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUnlockDashed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.469 1.284c-.693.073-1.499.371-2.122.784-.553.367-1.229 1.101-1.466 1.591-.247.508.106 1.083.66 1.075.321-.004.473-.11.738-.514.182-.277.615-.715.896-.908a3.278 3.278 0 0 1 3.65-.001c.49.334.971.93 1.194 1.479.189.465.221.757.221 2.023v1.176l.69.021c.379.011.722.034.76.05.066.027.07-.038.07-1.031 0-.584-.019-1.243-.042-1.466a4.74 4.74 0 0 0-1.465-3.007 4.212 4.212 0 0 0-1.228-.839 4.822 4.822 0 0 0-1.545-.436 3.722 3.722 0 0 0-1.011.003m.231 12.032a.734.734 0 0 0-.398.413c-.091.219-.091 2.323 0 2.542a.748.748 0 0 0 1.396 0c.051-.122.062-.348.061-1.28-.001-1.014-.008-1.148-.075-1.291-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUnlockDashed);
export default ForwardRef;
