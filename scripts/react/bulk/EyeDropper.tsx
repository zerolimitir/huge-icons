import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgEyeDropper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.508 2.9c-.459.126-.61.241-1.57 1.188l-.922.911-.218-.221c-.371-.375-.706-.468-1.066-.294-.338.163-.49.65-.312.997.101.198 3.804 3.886 3.986 3.971.28.13.687.057.882-.159a.904.904 0 0 0 .192-.513c0-.225-.098-.405-.378-.695l-.259-.268.88-.879c.484-.483.932-.959.995-1.058.481-.75.363-1.808-.273-2.44-.413-.411-.877-.603-1.443-.596a2.433 2.433 0 0 0-.494.056M5.511 17.395c-.892.937-1.443 1.911-1.497 2.641-.026.361.056.801.208 1.111.299.612 1.081.937 1.981.823.993-.125 1.517-.744 1.517-1.794 0-.165-.02-.385-.043-.488-.071-.303-.495-1.12-.781-1.499-.289-.386-.93-1.114-1-1.137-.024-.008-.198.146-.385.343'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeDropper);
export default ForwardRef;
