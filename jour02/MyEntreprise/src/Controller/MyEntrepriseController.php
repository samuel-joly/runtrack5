<?php

namespace App\Controller;

use App\Entity\Projets;
use App\Repository\ProjetsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MyEntrepriseController extends AbstractController
{
    public function index()
    {
        $projets = $this->getDoctrine()
        ->getRepository(Projets::class)
        ->findAll();
        return $this->render('my_entreprise/index.html.twig', [
            'projets' => $projets,
        ]);
    }

    public function home(){
        return $this->render('my_entreprise/home.html.twig');
    }
    
    public function project_page(ProjetsRepository $project, $id) 
    {
        return $this->render('my_entreprise/projectPage.html.twig', [
            'project' => $project->find($id)
           ]);
    }
}
