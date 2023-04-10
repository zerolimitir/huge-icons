import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHoodedBellNotification = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.223 18h11.554c1.829 0 2.872-1.839 1.775-3.128a3.657 3.657 0 0 1-.865-1.957l-.164-1.445a4.5 4.5 0 0 1-4.192-7.075 7.045 7.045 0 0 0-.061-.021V4.27a2.27 2.27 0 1 0-4.54 0v.104c-2.142.733-3.728 2.477-3.97 4.601l-.447 3.94c-.08.71-.38 1.387-.865 1.957C3.35 16.162 4.394 18 6.223 18ZM21 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 15c1.357 0 2.515-.8 2.972-1.928a.423.423 0 0 0-.396-.572H9.424a.423.423 0 0 0-.395.572C9.485 21.2 10.643 22 12 22Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellNotification);
export default ForwardRef;
