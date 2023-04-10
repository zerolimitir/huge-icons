import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStrikethrough = (
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
            d='M12.75 5.5c-1.892 0-3.25 1.322-3.25 2.75 0 .641.274 1.262.747 1.75H8.415A3.866 3.866 0 0 1 8 8.25C8 5.812 10.224 4 12.75 4s4.75 1.812 4.75 4.25a.75.75 0 0 1-1.5 0c0-1.428-1.358-2.75-3.25-2.75Zm0 7h-9a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5h-3.375c.696.729 1.125 1.679 1.125 2.75 0 2.438-2.224 4.25-4.75 4.25S8 17.688 8 15.25a.75.75 0 0 1 1.5 0c0 1.428 1.358 2.75 3.25 2.75S16 16.678 16 15.25s-1.358-2.75-3.25-2.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStrikethrough);
export default ForwardRef;
