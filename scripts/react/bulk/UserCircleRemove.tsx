import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserCircleRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.38 5.817A3.038 3.038 0 0 0 8.113 7.92c-.133.43-.132 1.244.002 1.68a3.087 3.087 0 0 0 2.125 2.066c.185.051.404.071.76.071.568 0 .846-.059 1.308-.28.723-.346 1.281-.991 1.556-1.797.097-.285.109-.381.112-.88.003-.48-.009-.603-.089-.86a3.055 3.055 0 0 0-2.027-2.04c-.358-.113-1.123-.146-1.48-.063m-.1 7.208-.46.06c-1.034.129-3.055.826-3.368 1.162a.745.745 0 0 0 .248 1.197.841.841 0 0 0 .29.075c.071.001.413-.114.76-.255.763-.31 1.373-.509 1.932-.63.609-.132 1.779-.133 2.433-.001.663.133 1.469.383 2.393.744.416.161.562.174.792.067.615-.285.621-1.054.01-1.368-.271-.14-1.293-.508-1.866-.672a10.911 10.911 0 0 0-1.784-.363c-.34-.038-1.162-.047-1.38-.016m6.072 3.575a.764.764 0 0 0-.511.924c.039.146.137.267.572.707l.524.53-.484.49c-.267.269-.514.547-.549.617-.127.254-.048.673.162.857a.767.767 0 0 0 .803.134c.082-.035.361-.274.639-.548l.492-.487.47.463c.557.549.656.608.973.585.41-.03.677-.307.677-.705a1.12 1.12 0 0 0-.042-.313c-.024-.062-.261-.332-.528-.602l-.485-.491.504-.512c.586-.598.652-.729.549-1.098-.078-.283-.405-.548-.678-.55-.284-.002-.413.08-.93.591l-.51.504-.53-.524c-.609-.602-.762-.68-1.118-.572'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleRemove);
export default ForwardRef;
