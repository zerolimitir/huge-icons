import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReturn = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
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
            d='M12.752 5.394V7.18a.749.749 0 0 1-.74.756.749.749 0 0 1-.74-.756V5.326l-.655.62a.735.735 0 0 1-1.069-.056.773.773 0 0 1 .06-1.066l2.052-1.899a.492.492 0 0 1 .671 0l2.055 1.894a.78.78 0 0 1 .062 1.077.742.742 0 0 1-1.068.069l-.628-.571ZM2.214 11.363l1.549-1.995a1 1 0 0 1 .79-.386h7.444l-2.698 3.594a1 1 0 0 1-.8.4H3.004a1 1 0 0 1-.79-1.613Zm9.783-2.381h7.447a1 1 0 0 1 .79.386l1.55 1.994a1 1 0 0 1-.79 1.614h-5.411a1 1 0 0 1-.79-.387l-2.796-3.607Zm-3.874 5.414H4v5.411c0 1.625 1.343 2.943 3 2.943h10c1.657 0 3-1.318 3-2.943v-5.411h-4.11a3.518 3.518 0 0 1-2.917-1.535l-.966-1.428-.966 1.428a3.518 3.518 0 0 1-2.917 1.535Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReturn);
export default ForwardRef;
