import {Link} from "@inertiajs/inertia-react";

const Prova = props =>{

    return (
        <>
            <p>{props.value}</p>
            <Link href="/post">Indietro</Link>
        </>
    )
}
export default Prova