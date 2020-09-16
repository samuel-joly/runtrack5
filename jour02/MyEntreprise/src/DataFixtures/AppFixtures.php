<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Projets;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i=0;$i<10;$i++){
            $projet = new Projets();
            $projet->settitle('Projet N'.$i);
            $projet->setcreatedAt(new \DateTime('now'));
            $projet->setImage('default-'.$i.".png");
            $projet->setContent($i."Lorem .ipsum dolor sit amet as este parlora se desto");

            $manager->persist($projet);
        }

        $manager->flush();
    }
}
