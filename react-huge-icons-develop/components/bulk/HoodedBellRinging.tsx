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
            d='M15.804 3.222a.75.75 0 0 1 .975-.418l.167.067a6.75 6.75 0 0 1 3.717 3.656l.077.183a.75.75 0 1 1-1.383.58l-.077-.183a5.25 5.25 0 0 0-2.891-2.844l-.168-.066a.75.75 0 0 1-.417-.975Zm-7.559 0a.75.75 0 0 0-.975-.418l-.167.067a6.75 6.75 0 0 0-3.718 3.656l-.077.183a.75.75 0 0 0 1.384.58l.076-.183A5.25 5.25 0 0 1 7.66 4.263l.167-.066a.75.75 0 0 0 .418-.975Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M12 21c1.385 0 2.563-.835 3-2H9c.437 1.165 1.615 2 3 2Z' />
        <path
            fill='currentColor'
            d='M6.223 19h11.554c1.829 0 2.872-1.84 1.775-3.128a3.656 3.656 0 0 1-.865-1.957l-.448-3.94c-.24-2.124-1.827-3.868-3.97-4.601V5.27a2.27 2.27 0 1 0-4.539 0v.104c-2.142.733-3.728 2.477-3.97 4.601l-.447 3.94c-.08.71-.38 1.387-.865 1.957C3.35 17.161 4.394 19 6.223 19Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellRinging);
export default ForwardRef;
