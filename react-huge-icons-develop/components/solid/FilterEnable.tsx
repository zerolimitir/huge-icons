import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterEnable = (
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
            d='M10.75 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V2Zm4 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0V5ZM7.215 6.719a.75.75 0 1 0-.43-1.438c-.962.288-1.805.667-2.424 1.137-.61.462-1.111 1.101-1.111 1.908 0 3.834 2.017 7.19 5 8.758v2.927c0 2.041 2.157 3.353 3.978 2.448l2-.993a2.735 2.735 0 0 0 1.522-2.448v-1.934c2.983-1.568 5-4.924 5-8.758 0-.807-.502-1.446-1.11-1.908-.62-.47-1.463-.85-2.425-1.137a.75.75 0 0 0-.43 1.438c.867.258 1.524.572 1.948.893.433.33.517.58.517.714 0 .118-.061.322-.374.597-.312.275-.806.556-1.48.807-1.345.501-3.253.826-5.396.826s-4.05-.325-5.395-.826c-.675-.251-1.169-.532-1.48-.807-.313-.275-.375-.479-.375-.597 0-.134.084-.384.518-.714.423-.321 1.08-.635 1.947-.893ZM10 6.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterEnable);
export default ForwardRef;
