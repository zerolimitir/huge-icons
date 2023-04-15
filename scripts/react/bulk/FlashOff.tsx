import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlashOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.807 3.288c-.375.083-.605.482-.518.902.038.183.13.282 2.495 2.651C7.135 8.194 8.24 9.316 8.24 9.333c0 .018-.721.954-1.603 2.08L5.034 13.46l2.483.01 2.483.011.01 4.244.01 4.245 2.356-3.015c1.296-1.658 2.372-3.032 2.391-3.054.021-.023.983.908 2.444 2.366 2.59 2.585 2.52 2.525 2.894 2.482a.738.738 0 0 0 .578-1.049c-.052-.112-2.529-2.612-8.189-8.266C5.535 4.482 4.36 3.324 4.24 3.301l-.2-.039a.841.841 0 0 0-.233.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashOff);
export default ForwardRef;
