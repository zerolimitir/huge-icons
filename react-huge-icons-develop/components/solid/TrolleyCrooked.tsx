import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrolleyCrooked = (
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
            d='M8.27 7.146a1.804 1.804 0 0 1 1.3-2.213l7.094-1.871c.98-.258 1.986.314 2.248 1.278l1.901 6.981a1.804 1.804 0 0 1-1.298 2.213l-7.094 1.871c-.98.259-1.986-.313-2.248-1.277L8.27 7.145Zm7.17-.956a.75.75 0 0 1-.533.917l-1.774.467a.75.75 0 0 1-.382-1.45l1.773-.468a.75.75 0 0 1 .917.534Zm-9.582-.289C5.483 4.533 4.062 3.738 2.695 4.1l-.886.234a.75.75 0 1 0 .382 1.45l.887-.234a1.09 1.09 0 0 1 1.334.75L7.64 17.716a1.793 1.793 0 0 0-.714 1.944c.262.964 1.269 1.536 2.248 1.278a1.82 1.82 0 0 0 1.303-1.292L22.2 16.408a.75.75 0 0 0-.4-1.446l-11.59 3.202a1.843 1.843 0 0 0-1.09-.73L5.857 5.9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrolleyCrooked);
export default ForwardRef;
