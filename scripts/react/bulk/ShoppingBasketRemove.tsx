import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.38 6.044a4.657 4.657 0 0 0-1.16.366 4.044 4.044 0 0 0-2.202 3.261L1.99 10h20.02l-.028-.329c-.163-1.863-1.578-3.375-3.397-3.628-.378-.052-12.836-.052-13.205.001m8.46 7.139c-.082.035-.492.411-.99.908l-.849.847-.851-.846c-.467-.466-.901-.866-.963-.889a1.019 1.019 0 0 0-.574 0 .803.803 0 0 0-.398.386.985.985 0 0 0-.013.598c.023.062.423.495.889.963l.847.849-.846.851c-.466.467-.866.901-.889.963-.055.144-.055.43 0 .574.057.154.23.331.386.398a.97.97 0 0 0 .598.012c.062-.023.495-.423.963-.888l.849-.846.891.885c.967.961.975.967 1.375.921.211-.023.429-.18.541-.389.082-.154.097-.453.031-.627-.023-.062-.432-.505-.909-.983l-.866-.871.847-.849c.547-.548.87-.903.91-.999.246-.597-.386-1.222-.979-.968'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketRemove);
export default ForwardRef;
