import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOnlineLearning = (
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
            d='M11.454 9.886c-1.7-1.158-4.084-1.682-5.859-1.877C4.717 7.912 4 8.625 4 9.505v8.762c0 .88.717 1.593 1.595 1.69 1.775.194 4.16.719 5.859 1.876A.97.97 0 0 0 12 22V10.053a.97.97 0 0 1-.546-.167Z'
        />
        <path
            fill='currentColor'
            d='M12.546 9.886c1.7-1.158 4.084-1.682 5.858-1.877.879-.097 1.596.616 1.596 1.496v8.762c0 .88-.717 1.593-1.596 1.69-1.774.194-4.159.719-5.857 1.876A.97.97 0 0 1 12 22V10.053a.97.97 0 0 0 .546-.167Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 5.75c-.593 0-1.147.158-1.625.434a.75.75 0 1 1-.75-1.298A4.732 4.732 0 0 1 12 4.25c.864 0 1.676.231 2.375.636a.75.75 0 1 1-.75 1.298A3.231 3.231 0 0 0 12 5.75Zm0-3a6.218 6.218 0 0 0-3.57 1.12.75.75 0 0 1-.859-1.23 7.718 7.718 0 0 1 4.43-1.39c1.645 0 3.173.514 4.428 1.39a.75.75 0 1 1-.858 1.23 6.218 6.218 0 0 0-3.57-1.12Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOnlineLearning);
export default ForwardRef;
