import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketSimple = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.815 1.277a.823.823 0 0 0-.24.114c-.063.046-.754.936-1.534 1.978L5.622 5.265l-.446.086a4.821 4.821 0 0 0-2.584 1.446c-.244.27-.626.838-.775 1.153a5.57 5.57 0 0 0-.398 1.245 5.253 5.253 0 0 0 .019 1.674c.136.689 2.076 8.512 2.175 8.776a4.746 4.746 0 0 0 1.135 1.743c.662.651 1.461 1.073 2.421 1.281.307.066.664.071 4.851.071 4.501 0 4.522 0 4.884-.087.2-.048.526-.148.724-.222 1.292-.485 2.355-1.583 2.789-2.88.12-.356 2.123-8.507 2.181-8.871a5.535 5.535 0 0 0-.021-1.483c-.375-1.979-1.837-3.478-3.753-3.846l-.446-.086-1.419-1.896c-.78-1.042-1.47-1.932-1.532-1.977-.544-.394-1.317.143-1.142.792.028.103.412.649 1.121 1.596l1.079 1.44-2.243.01a558.51 558.51 0 0 1-4.484 0l-2.243-.01 1.079-1.44c.713-.953 1.093-1.493 1.121-1.597a.813.813 0 0 0-.135-.646c-.159-.21-.501-.326-.765-.26m9.925 5.577c.627.187 1.281.611 1.663 1.078.208.255.57.946.617 1.178l.026.13H2.954l.027-.13c.046-.223.358-.839.56-1.105.324-.427.868-.83 1.406-1.04.527-.207.273-.2 7.153-.191 6.025.008 6.414.012 6.64.08m2.3 3.94c0 .128-2.02 8.215-2.105 8.427-.374.935-1.193 1.652-2.195 1.923-.267.072-.489.076-4.76.076-5.031 0-4.653.021-5.328-.303-.733-.352-1.366-1.049-1.633-1.797-.06-.169-2.059-8.252-2.059-8.326 0-.019 4.068-.034 9.04-.034 4.972 0 9.04.015 9.04.034'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketSimple);
export default ForwardRef;