import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReloadRectangle = (
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
            d='M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm8.483 3.723a.75.75 0 0 0-1.394.554l.173.437A6.11 6.11 0 0 0 12 6.584C8.874 6.583 6.25 8.96 6.25 12c0 .485.068.956.195 1.405a.75.75 0 0 0 1.443-.41A3.63 3.63 0 0 1 7.75 12c0-2.115 1.853-3.917 4.25-3.917a4.5 4.5 0 0 1 2.213.572.75.75 0 0 0 1.065-.93l-.795-2.002Zm3.072 4.872a.75.75 0 0 0-1.443.41c.09.317.138.65.138.995 0 2.115-1.853 3.917-4.25 3.917-.814 0-1.57-.21-2.212-.573a.75.75 0 0 0-1.066.93l.795 2.003a.75.75 0 1 0 1.394-.554l-.173-.437c.406.085.829.13 1.262.13 3.126 0 5.75-2.377 5.75-5.416 0-.485-.068-.956-.195-1.405Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReloadRectangle);
export default ForwardRef;
