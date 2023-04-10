import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHoodedBell = (
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
            d='M17.777 18H6.223c-1.829 0-2.872-1.84-1.775-3.128.485-.57.785-1.247.865-1.957l.447-3.94c.242-2.124 1.828-3.868 3.97-4.601V4.27a2.27 2.27 0 1 1 4.54 0v.104c2.142.733 3.728 2.477 3.97 4.601l.447 3.94c.08.71.38 1.387.865 1.957C20.65 16.161 19.606 18 17.777 18Zm-2.805 2.072C14.515 21.198 13.357 22 12 22s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBell);
export default ForwardRef;
