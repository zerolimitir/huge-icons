import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatLove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.924 9.423c-.919.247-1.527 1.182-1.372 2.107.099.584.174.686 1.443 1.954.834.833 1.196 1.168 1.331 1.232.293.137.63.186.918.133.467-.087.539-.143 1.758-1.365 1.26-1.262 1.311-1.331 1.428-1.925.054-.276.054-.337-.004-.62a2.747 2.747 0 0 0-.172-.536c-.15-.308-.531-.68-.856-.835-.741-.353-1.515-.225-2.132.353l-.268.25-.25-.24c-.515-.495-1.182-.68-1.824-.508'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatLove);
export default ForwardRef;
