import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.825 9.258c-.175.047-.275.132-1.01.867l-.815.814-.79-.788c-.504-.503-.844-.81-.939-.85-.378-.156-.803.032-.969.428-.168.402-.087.543.849 1.481l.788.79-.811.812c-.716.717-.818.835-.87 1.008-.161.536.326 1.048.886.932.184-.038.247-.091 1.026-.865l.83-.824.83.824c.779.774.842.827 1.026.865a.75.75 0 0 0 .886-.533c.052-.179.052-.226 0-.399-.052-.173-.154-.291-.87-1.008L13.061 12l.811-.812c.701-.702.819-.837.867-.999a.75.75 0 0 0-.515-.93 3.216 3.216 0 0 0-.201-.056l-.198.055'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatClose);
export default ForwardRef;
