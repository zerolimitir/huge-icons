import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHoodedBellRinging = (
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
            d='M7.462 2a.75.75 0 0 1 .557 1.393l-.167.067A5.25 5.25 0 0 0 4.96 6.303l-.077.184a.75.75 0 1 1-1.383-.58l.077-.184a6.75 6.75 0 0 1 3.717-3.656L7.462 2Zm9.076.044a.75.75 0 0 0-.557 1.393l.167.067a5.25 5.25 0 0 1 2.892 2.844l.077.183a.75.75 0 0 0 1.383-.58l-.077-.184a6.75 6.75 0 0 0-3.717-3.656l-.168-.067ZM17.778 18c1.828 0 2.871-1.839 1.774-3.128a3.655 3.655 0 0 1-.865-1.957l-.448-3.94c-.24-2.124-1.827-3.868-3.97-4.601V4.27a2.27 2.27 0 1 0-4.539 0v.104c-2.142.733-3.728 2.477-3.97 4.601l-.447 3.94c-.08.71-.38 1.387-.865 1.957C3.35 16.162 4.394 18 6.223 18h11.554Zm-2.806 2.072C14.515 21.2 13.357 22 12 22s-2.515-.8-2.972-1.928a.423.423 0 0 1 .396-.572h5.152a.423.423 0 0 1 .396.572Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellRinging);
export default ForwardRef;
